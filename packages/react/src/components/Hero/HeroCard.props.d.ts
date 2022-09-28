import { heroCardAlignment, heroCardTypes, heroCardTheme } from "../../types";

export interface HeroCardProps {
  /**
   * Theme for the card
   */
  alignment?: heroCardAlignment;

  /**
   * Specify an optional className to be added to your Hero component.
   */
  className?: string;

  /**
   * date copy for the hero card
   */
  datecopy?: string;

  /**
   * eyebrow copy for the hero card
   */
  eyebrow?: string;

  /**
   * body copy for the hero card
   */
  intro?: string;

  /**
   * Specify the links to be displayed in this link group
   */
  socials?: Required<Array<SocialProps>>;

  /**
   * Title for the page
   */
  title: string;

  /**
   * Theme for the card
   */
  theme?: heroCardTheme;

  /**
   * Type of hero for the card
   */
  types?: heroCardTypes;
}

interface SocialProps {
  /**
   * Specify the label for this link
   */
  label?: Required<string>;

  /**
   * Specify the url for this link
   */
  url?: Required<string>;

  /**
   * Specify the icon for this link
   */
  icon?: Required<string>;
}