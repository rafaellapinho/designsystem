import { HeroCard } from "../HeroCard.props";
import { heroCardAlignment, heroCardTypes, heroCardTheme } from "../../types";

export interface HeroProps {
  /**
   * Specify an optional className to be added to your Hero component.
   */
  className?: string;

  /**
   * Props for the image for the hero
   */
  image?: Required<ImageProps>;

  /**
   * Props for the card for the hero
   */
  heroCard?: ReactDOM<HeroCardProps>;

  /**
   * Theme for the card
   */
  theme?: heroCardTheme;

  /**
   * Type of hero for the card
   */
  types?: heroCardTypes;
}