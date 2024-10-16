import {ITitledText} from "./ITitledText"

export namespace TextValues {

  export const MAPPING_DONE_P1: string = "You’re all set!"

  export const MAPPING_DONE_P2: string = "Your spaces are aligned!"

  export const UNSUCCESS_NOTIFICATION_TITLE_P1: string = "Couldn’t successfully scan your surroundings"

  export const UNSUCCESS_NOTIFICATION_TITLE_P2: string = "Couldn’t successfully align your spaces"

  export const TUTORIAL_P1: ITitledText = {
    title: "Walk around and look around to scan your area",
    text: "Improve the quality of your map by moving laterally and viewing the same objects from different angles."
  }

  export const TUTORIAL_P2: ITitledText = {
    title: "Align your spaces",
    text: "Match %P1%’s starting position as close as possible to align your spaces."
  }

  export const TUTORIAL_P1_TEACHES_P2: ITitledText = {
    title: "Align your spaces",
    text: "Guide others to match your starting position to align your spaces."
  }

  export const ALIGN_HINT_P1_TEACHES_P2: string = "Show %P2% the group start point"

  export const WAITING_FOR_MAPPING: string = "Wait for %P1% to set things up"

  export const TEACHING_TEXT: string = "Tell %P2% to match this position and view direction"

  export const MAPPING_HINTS_P1: ITitledText[] = [
    {
      title: "Ensure surroundings have objects and patterns",
      text: "This helps with better detection.",
    },
    {
      title: "Avoid plain, solid-colored walls",
      text: "Detailed environments provide more information.",
    },
    {
      title: "Improve lighting",
      text: "Good lighting makes details visible.",
    },
    {
      title: "Move steadily",
      text: "Lateral movements improve quality and help avoid missing details.",
    },
  ]

  export const MAPPING_HINTS_P2: ITitledText[] = [
    {
      title: "Align your spaces",
      text: "Match %P1%’s starting position as close as possible to align your spaces",
    },
    {
      title: "Move steadily",
      text: "Lateral movements improve quality and help avoid missing details.",
    },
    {
      title: "Ensure environment details haven't changed",
      text: "Make sure furniture and objects are in the same place for better detection.",
    },
    {
      title: "Ensure lighting conditions haven't changed",
      text: "Consistent lighting makes details visible.",
    },
  ]

  export const P1: string = "%P1%"

  export const P2: string = "%P2%"

}
