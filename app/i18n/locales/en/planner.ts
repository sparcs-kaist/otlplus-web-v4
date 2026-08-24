export const planner = {
    list: {
        title: "Graduation Planner",
        item: "Planner {{index}}",
        empty: "No planners yet.",
    },
    actions: {
        create: "Create planner",
        copy: "Copy current planner",
        delete: "Delete current planner",
        deleteConfirm: "Delete this planner? This action cannot be undone.",
        moveUp: "Move earlier",
        moveDown: "Move later",
        save: "Save settings",
        search: "Search",
        addCourse: "Add selected course",
        addArbitrary: "Add arbitrary course",
        include: "Include",
        exclude: "Exclude",
        changeSemester: "Change semester",
        removeItem: "Remove course",
        removeItemConfirm: "Remove this course from the plan?",
    },
    settings: {
        title: "Planner Settings",
        startYear: "Entry year",
        endYear: "Expected graduation",
        duration: "Plan duration",
        durationYears: "{{count}} years",
        generalTrack: "General requirements",
        majorTrack: "Primary major",
        additionalTracks: "Additional tracks",
        domestic: "Domestic student",
        foreign: "International student",
        confirmRange:
            "Changing the planner to {{startYear}}–{{endYear}} will remove {{count}} courses. Continue?",
        confirmIncompatible:
            "{{count}} selected requirements may not apply to a {{startYear}} entrant. Continue?",
        errors: {
            sameAsPrimary:
                "A minor or double major cannot use the primary-major department.",
            duplicateDepartment:
                "A department cannot be selected as both a minor and a double major.",
            advancedDepartment:
                "An advanced major must use the primary-major department.",
            multipleAdvanced: "Only one advanced major can be selected.",
            multipleInterdisciplinary:
                "Only one interdisciplinary major can be selected.",
        },
    },
    trackTypes: {
        PRIMARY: "Primary Major",
        DOUBLE: "Double Major",
        MINOR: "Minor",
        ADVANCED: "Advanced Major",
        INTERDISCIPLINARY: "Interdisciplinary Major",
    },
    summary: {
        title: "Requirement Summary",
        disclaimer:
            "This summary is a credit and AU planning aid. It does not evaluate GPA, language proficiency, non-credit completion, department-specific required courses, substitutions, overlap recognition, or approval conditions. Always confirm against the applicable KAIST Bulletin and your department's graduation\u00A0regulations.",
        breakdown: "Taken {{taken}} · Planned {{planned}}",
        units: {
            credit: "credits",
            au: "AU",
        },
        categories: {
            totalCredit: "Total Credits",
            totalAu: "Total AU",
            basicRequired: "Basic Required",
            basicElective: "Basic Elective",
            thesisStudy: "Thesis Study",
            generalRequiredCredit: "General Required Credits",
            generalRequiredAu: "General Required AU",
            humanities: "Humanities",
            majorRequired: "Major Required",
            majorElective: "Major Elective",
            other: "Other",
        },
    },
    grid: {
        title: "Semester Plan",
        year: "{{year}}",
        empty: "No courses added.",
        addHere: "Add to {{year}} {{semester}}",
        targetYear: "Target year",
        targetSemester: "Target semester",
    },
    semesters: {
        1: "Spring",
        2: "Summer",
        3: "Fall",
        4: "Winter",
    },
    items: {
        arbitrary: "Arbitrary course",
        credits: " credits",
        au: "AU",
        duplicate: "Duplicate course",
    },
    search: {
        title: "Search and Add Courses",
        keyword: "Course keyword",
        placeholder: "Enter a course name or code",
        duplicate: "This course is already planned",
        takenDuplicateConfirm:
            "This course already exists in your completed history. Add the plan and exclude the completed item?",
    },
    arbitrary: {
        title: "Add Arbitrary Course",
        department: "Department",
        type: "Course type",
        credit: "Credits",
        creditAU: "AU",
    },
    categories: {
        "Basic Required": "Basic Required",
        "Basic Elective": "Basic Elective",
        "Major Required": "Major Required",
        "Major Elective": "Major Elective",
        "Thesis Study(Undergraduate)": "Thesis Study",
        "General Required": "General Required",
        "Humanities & Social Elective": "Humanities & Social Elective",
        "Other Elective": "Other Elective",
    },
    status: {
        loading: "Loading your planner.",
        error: "The planner request could not be completed.",
    },
    empty: {
        title: "Start your graduation plan",
        description:
            "Choose tracks and manage semester courses and graduation requirements together.",
    },
}
