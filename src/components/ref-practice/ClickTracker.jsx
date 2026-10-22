import {useRef} from 'react'

function ClickTracker() {
  const clicksRef = useRef(0);

  const trackClick = () => {
    clicksRef.current += 1;
    console.log("Click count:", clicksRef.current);
  };
  return (
    <div>
        <h4>Click tracker</h4>
        <button ref={clicksRef} type='button' onClick={trackClick}>Track click</button>
    </div>
  )
}

export default ClickTracker