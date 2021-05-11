/// <reference types="react" />
export interface TextInterface {
    /** Sets the data-test-id attribute to place on the html element. */
    dataTestId?: string;
    /** Sets the for attribute on the html element if the Text is a label. */
    htmlFor?: string;
    /** Whether the text is on a dark background, setting this flag to true will make the text white. */
    invert?: boolean;
    /** Sets the text component to 50% opacity. */
    fade?: boolean;
    /** Remove all CSS margins from text. */
    zeroMargin?: boolean;
    /** Make the text bold. */
    bold?: boolean;
    /** Display the text inline. */
    inline?: boolean;
    children?: string | JSX.Element | (string | JSX.Element)[];
}
