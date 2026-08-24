import { type Project, defineConfig, devices } from "@playwright/test"

const localBaseURL = "http://localhost:5173"
const authenticatedBaseURL = process.env.TEST_BASE_URL ?? "https://otl.sparcs.org"
const hasSsoCredentials = Boolean(
    process.env.TEST_SSO_EMAIL && process.env.TEST_SSO_PASSWORD,
)

const projects: Project[] = [
    {
        name: "chromium",
        testIgnore: [/auth\.setup\.ts/, /authenticated\.spec\.ts/],
        use: { ...devices["Desktop Chrome"] },
    },
]

if (hasSsoCredentials) {
    projects.push(
        {
            name: "auth-setup",
            testMatch: /auth\.setup\.ts/,
            use: {
                ...devices["Desktop Chrome"],
                baseURL: authenticatedBaseURL,
                screenshot: "off",
                trace: "off",
                video: "off",
            },
        },
        {
            name: "authenticated",
            testMatch: /authenticated\.spec\.ts/,
            dependencies: ["auth-setup"],
            use: {
                ...devices["Desktop Chrome"],
                baseURL: authenticatedBaseURL,
                storageState: "test-results/.auth/user.json",
            },
        },
    )
}

export default defineConfig({
    testDir: "./e2e",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: process.env.CI ? "github" : "html",
    use: {
        baseURL: localBaseURL,
        trace: "on-first-retry",
        screenshot: "only-on-failure",
    },
    projects,
    webServer: process.env.PLAYWRIGHT_REMOTE_ONLY
        ? undefined
        : [
              {
                  command: "pnpm run dev",
                  url: localBaseURL,
                  reuseExistingServer: !process.env.CI,
                  timeout: 120000,
              },
              {
                  command: "pnpm run dev:flags-on",
                  url: "http://localhost:5218",
                  reuseExistingServer: !process.env.CI,
                  timeout: 120000,
              },
          ],
})
