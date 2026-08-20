import styled from "@emotion/styled"

export const ActionButton = styled.button<{ $primary?: boolean; $danger?: boolean }>`
    appearance: none;
    border: 1px solid
        ${({ $danger, $primary, theme }) =>
            $danger
                ? theme.colors.Highlight.dark
                : $primary
                  ? theme.colors.Highlight.default
                  : theme.colors.Line.default};
    border-radius: 6px;
    padding: 8px 12px;
    color: ${({ $danger, $primary, theme }) =>
        $danger || $primary
            ? theme.colors.Text.onHighlight.default
            : theme.colors.Text.default};
    background: ${({ $danger, $primary, theme }) =>
        $danger
            ? theme.colors.Highlight.dark
            : $primary
              ? theme.colors.Highlight.default
              : theme.colors.Background.Button.default};
    flex-shrink: 0;
    font: inherit;
    white-space: nowrap;
    cursor: pointer;
    transition:
        background-color 120ms ease,
        transform 120ms ease;

    &:hover:not(:disabled) {
        filter: brightness(0.96);
    }

    &:active:not(:disabled) {
        transform: translateY(1px);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.45;
    }
`

export const StatusNotice = styled.div`
    padding: 10px 12px;
    border: 1px solid ${({ theme }) => theme.colors.Highlight.subtle};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.Highlight.dark};
    background: ${({ theme }) => theme.colors.Background.Button.highlight};
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.NormalBold.fontWeight};
    text-align: center;
`

export const Field = styled.input`
    min-width: 0;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.Line.default};
    border-radius: 6px;
    padding: 8px 10px;
    color: ${({ theme }) => theme.colors.Text.default};
    background: ${({ theme }) => theme.colors.Background.Section.default};
    font: inherit;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 1px;
    }
`

export const Select = styled.select`
    min-width: 0;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.Line.default};
    border-radius: 6px;
    padding: 8px 10px;
    color: ${({ theme }) => theme.colors.Text.default};
    background: ${({ theme }) => theme.colors.Background.Section.default};
    font: inherit;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 1px;
    }
`

export const FieldLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
    color: ${({ theme }) => theme.colors.Text.light};
    font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
`

export const PlannerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const PlannerFieldGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
    gap: 10px;
`

export const SectionTitle = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;
    line-height: ${({ theme }) => theme.fonts.Big.lineHeight}px;
`
