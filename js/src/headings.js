export function setupHeadingChangeButton() {
  const headingChangeButton = document.querySelector('#heading-change-button');
  headingChangeButton.addEventListener('click', (event) => {
    document.querySelector('#changeable-heading').classList.toggle('font-blue');
  });
}
