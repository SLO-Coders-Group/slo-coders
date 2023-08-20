import { render, screen, within } from "../../utils/test/test.utils";
import { BusinessesWithCodersList } from "./businesses-with-coders-list";

describe("test BusinessesWithCodersList", () => {
  it("does component render with Amazon listing", () => {
    render(<BusinessesWithCodersList />);

    const amazonSection = screen.queryByTestId("amazon");
    expect(amazonSection).toBeInTheDocument();

    if (amazonSection) {
      expect(within(amazonSection).getByText(/Amazon/)).toBeInTheDocument();

      expect(
        within(amazonSection).getByRole("link", {
          name: /www.amazon.jobs\/.../i,
        })
      ).toHaveAttribute(
        "href",
        "https://www.amazon.jobs/en/locations/san-luis-obispo-california"
      );

      expect(
        within(amazonSection).getByRole("link", {
          name: /san luis obispo/i,
        })
      ).toHaveAttribute("href", "https://goo.gl/maps/y6827rKwnhNPpJ6m7");

      expect(
        within(amazonSection).getByRole("link", {
          name: /glassdoor reviews/i,
        })
      ).toHaveAttribute(
        "href",
        "https://www.glassdoor.com/Reviews/Amazon-Reviews-E6036.htm"
      );

      expect(
        within(amazonSection).getByRole("link", {
          name: /linkedin jobs/i,
        })
      ).toHaveAttribute(
        "href",
        "https://www.linkedin.com/company/amazon/jobs/"
      );
    }
  });
});
