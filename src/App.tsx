import {
  ButtonGroup,
  ButtonAction,
  CalendarValue,
} from "./Components/CustomAPIs/ButtonGroupAPI";
import { Button, Calendar ,CalendarCell, CalendarGrid, Heading } from "react-aria-components";
function App() {
  return (
    <>
      <ButtonGroup isDisabled={true}>
        <Button>Edit</Button>
        <Button>Delete</Button>
        <Button>Save</Button>
      </ButtonGroup>
      <br />
      <ButtonAction>
        <Button slot="Back">Back</Button>
        <Button slot="Share">Share</Button>
        <Button slot="Bookmark">Bookmark</Button>
      </ButtonAction>
      <br/>
      <Calendar aria-label="Appointment date">
        <header>
          <Button slot="previous">◀</Button>
          <Heading />
          <Button slot="next">▶</Button>
        </header>
        <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
        <CalendarValue />
      </Calendar>
    </>
  );
}

export default App;
