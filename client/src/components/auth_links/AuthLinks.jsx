import React from 'react'

function AuthLinks() {
    const status = "notauthenticated"
  return (
    <div>
        {status==='notauthenticated' ? (
            <>
            <a href="">Login</a></>
        ):(
            <>
            <a href="">Write</a>
            <span>Logout</span>
            </>
        )}
    </div>
  )
}

export default AuthLinks