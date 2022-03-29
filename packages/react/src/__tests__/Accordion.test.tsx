import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../stories/Accordion.stories";
import { Accordion, AccordionItem } from "../components/Accordion";
import accordionArgs from "../components/Accordion/Accordion.args";

const { AccordionLarge, AccordionSmall } = composeStories(stories);

// Need to finish writting accordion tests

describe("<Accordion>", () => {
  it("Should render `h1` with story text.", () => {
    render(<AccordionLarge />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    fireEvent.click(buttonElement[0]);
    expect(buttonElement[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("Should render `h2` with story text.", () => {
    render(<AccordionSmall />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    fireEvent.click(buttonElement[0]);
    expect(buttonElement[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("Should print a warning if two <AccordionItem /> have same id", async () => {
    const consoleWarn = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    render(
      <Accordion {...accordionArgs.large}>
        <AccordionItem id="test-1">Item/</AccordionItem>
        <AccordionItem id="test-1">Item/</AccordionItem>
      </Accordion>
    );
    expect(consoleWarn).toHaveBeenCalled();
  });
});
