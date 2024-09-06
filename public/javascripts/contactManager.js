import { APIHandler } from "./apiHandler.js";
import { DisplayHandler } from "./display.js";
import { SetupHandler } from "./setup.js"
import { InputValidator } from "./inputValidator.js"

document.addEventListener('DOMContentLoaded', () => {
  let inputValidator = new InputValidator();
  let apiHandler = new APIHandler(inputValidator);
  let displayHandler = new DisplayHandler(apiHandler);
  new SetupHandler(apiHandler, displayHandler);
});