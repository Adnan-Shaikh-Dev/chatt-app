import React from 'react'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'
import {Stack} from 'react-bootstrap'

const UserChat = ({chat,user}) => {
    const {recipientUser} = useFetchRecipientUser(chat,user)
    // console.log(recipientUser)
  return (
    <Stack direction="horizontal" gap={3} className="user-card align-items-center p-2 justify-content-between">

        <div className="d-flex">
            <div className="me-2">
                A
            </div>
            <div className="text-content">
                <div className="name">
                    {recipientUser?.name}
                </div>
                <div className="text">
                    Text message
                </div>
            </div>
        </div>

        <div className="d-flex flex-column align-items-end">
            <div className="date">12/12/2022</div>
        </div>
        <div className="this-user-notifications">
            2
        </div>
        <span className="user-online">
            
        </span>
    </Stack>
  )
}

export default UserChat