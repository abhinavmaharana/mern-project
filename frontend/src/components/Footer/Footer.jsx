import React from 'react'
import SubFooter from './SubFooter/SubFooter'
import Copyright from './Copyright/Copyright';
import EndFooter from './EndFooter/EndFooter';
import MiddleFooter from './MiddleFooter/MiddleFooter';

function Footer() {
  return (
    <div className='bg-udemy_footer h-auto text-white mt-8'>
        <SubFooter />
        <MiddleFooter />
        <EndFooter />
        <Copyright />
    </div>
  )
}

export default Footer