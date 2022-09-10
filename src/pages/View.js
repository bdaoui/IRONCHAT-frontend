import React from 'react'
import { Link } from 'react-router-dom';

function View() {
  return (
    <div className="py-4">
                            <p className="text-center">
                                Join the discussion <Link to="/chat">Chat with other users</Link>
                            </p>
                            <p className="text-center">
                                View feed <Link to="/feed">The point of no return</Link>
                            </p>
                        </div>
  )
}

export default View    