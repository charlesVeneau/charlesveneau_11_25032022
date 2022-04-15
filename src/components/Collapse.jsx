import './styles/Collapse.scss';

function Collapse({ children, title, medium }) {
  return (
    <article className={'collapse ' + (medium ? 'collapse-medium' : '')}>
      <div className="collapse-title isClosed" onClick={toggleCollapse}>
        {title}
      </div>
      <div className="collapse-content isCollapsed">{children}</div>
    </article>
  );

  function toggleCollapse(e) {
    e.target.classList.toggle('isClosed');
    //Collapse animation handler
    expandeElement(e.target.nextElementSibling, 'isCollapsed');
  }

  function expandeElement(element, collapseClass) {
    element.style.height = '';
    element.style.padding = '';
    element.style.transition = 'none';

    const startHeight = window.getComputedStyle(element).height;
    const startpadding = window.getComputedStyle(element).padding;

    //Remove Collapsed class and save style
    element.classList.toggle(collapseClass);
    const height = window.getComputedStyle(element).height;
    const padding = window.getComputedStyle(element).padding;

    //Set the start valur at the beginning of the transition
    element.style.height = startHeight;
    element.style.padding = startpadding;

    // wait until the next frame so that everything has time to update before starting the transition
    requestAnimationFrame(() => {
      element.style.transition = '';

      requestAnimationFrame(() => {
        element.style.height = height;
        element.style.padding = padding;
      });
    });

    //Listen to the transition to clear value once the transition is complete
    element.addEventListener('transitionned', () => {
      element.style.height = '';
      element.style.padding = '';
      element.addEventListener('transitionned', () => {
        element.removeEventListener('transitionned', arguments.callee);
      });
    });
  }
}

export default Collapse;
