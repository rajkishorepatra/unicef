import React, { useRef , useState} from 'react';

function JoinUs() {
  const [name, setName] = useState('');
  const [ema, setEma] = useState('');
  const [num, setNum] = useState('');
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxnkA75lKN1ny3Le16c6m5gG4OReeDlKOYfMd411Oro6usOSQizAESrmMIYHMfzHavGgA/exec"

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for Registering!😄');
    fetch(scriptUrl, {
      method: 'POST',
      'mode': 'no-cors',
      body: new FormData(formRef.current),

    }).then(res => {
      // console.log("SUCCESSFULLY SUBMITTED")
    })
      .catch(err => console.log(err));
      setNum('');
      setName('');
      setEma('');
  }

  return (
    <>
      <div className='joinUs text-center' id='register'>
        <h1>Odisha COY 2023</h1>
        <h3>Odisha Conference of Youth 2023</h3>
        <h2 className='text-primary'>ACTION FOR THE CLIMATE</h2>
        <br />
        <h4>AUGUST 9-11, 2023</h4>
        <h4>BHUBANESWAR, ODISHA</h4>
      </div>
      <div className='d-flex justify-content-evenly mobMascot'>
        <img src="https://ik.imagekit.io/dqe4fvjcky/Youth4Water_Plus_Mascot_B__Revised___1_-removebg-preview_a6_EPVj0a.png?updatedAt=1685953553792" alt="mascot"  className='mx-lg-4'/>
        <div className='formJoin my-auto'>
          <h3 className='text-center text-primary mb-lg-5 mt-lg-0 mt-4 mb-4'>Register Yourself</h3>
          <form onSubmit={handleSubmit} method='post' ref={formRef} name="google-sheet" className='text-center'>
            <input type='text' name='name' onChange={(e) => setName(e.target.value)}
                        value={name} placeholder='Your Name...' required className='my-2' />
            <input type='email' name='email' onChange={(e) => setEma(e.target.value)}
                        value={ema} placeholder='Your Email...' required className='my-2' />
            <input type='text' name='number' onChange={(e) => setNum(e.target.value)}
                        value={num} placeholder='Your Number...' required className='my-2' />
            <input type='submit' value="Register" />
            {/* <Button id='sub' variant="warning" type='submit'>
              Submit
            </Button> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default JoinUs