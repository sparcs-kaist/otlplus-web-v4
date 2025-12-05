import FlexWrapper from "@/common/primitives/FlexWrapper";
import TabButton from "./TabButton";
import Typography from "@/common/primitives/Typography";
import Icon from "@/common/primitives/Icon";
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"



interface TabButtonRowProps {
  rowLength: number;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  isTimetable?: boolean;
  defaultText?: string;
}

const TabButtonRow: React.FC<TabButtonRowProps> = ({
  rowLength,
  index,
  setIndex,
  isTimetable = true,
  defaultText = "내 시간표"
}) => {
  return (
    <FlexWrapper direction="row" gap={3}>
      {Array.from({ length: rowLength }).map((_, i) => {
        if (i == 0) {
          return (
            <TabButton
              key={i}
              type={index == i ? 'selected' : 'default'}
              onClick={() => {
                setIndex(i);
              }}>
              {defaultText}
            </TabButton>
          );
        } else {
          return (
            <TabButton
              key={i}
              type={index == i ? 'selected' : 'default'}
              onClick={() => {
                setIndex(i);
              }}>
              <Typography type="Normal">{`시간표 ${i}`}</Typography>
              {isTimetable && (
                <>
                  <Icon size={17.5}>
                    <ContentCopyIcon />
                  </Icon>
                  <Icon size={17.5}>
                    <CloseIcon />
                  </Icon>
                </>
              )}
            </TabButton>
          );
        }
      })}
      {isTimetable && (
        <TabButton>
            <Icon size={17.5}>
                <AddIcon />
            </Icon>
        </TabButton>
      )}
    </FlexWrapper>
  );
};

export default TabButtonRow;
