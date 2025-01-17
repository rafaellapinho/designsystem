import FileUpload from "./fileupload";

Drupal.behaviors.fileupload = {
  attach() {
    Array.prototype.forEach.call(
      document.querySelectorAll(`[data-loadcomponent="FileUpload"]`),
      (element) => {
        // eslint-disable-next-line no-console
        new FileUpload(element);
      }
    );
  },
};
