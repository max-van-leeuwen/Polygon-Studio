import StateMachine from "../../../../../SpectaclesInteractionKit/Utils/StateMachine"

export class MappingCanceledState {
  constructor(input: ScriptComponent, stateMachine: StateMachine) {}

  enter() {
    // Shouldn't be in this state.
  }

  exit() {}
}
