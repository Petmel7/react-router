import { useState } from "react"
import { Topic, Wrapper, Text } from './QuizCard.styled';
import Modal from 'react-modal';
import { Link, useLocation } from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

Modal.setAppElement('#root');

export const QuizCard = ({ item:
    { id, topic, level, time, questions }, onDelete }) => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Wrapper>
            <Link to={`/quizzes/${id}`} state={{from: location}}>
                <Topic>{topic}</Topic>
            </Link>
            <Text>
                <b>Level:</b>{level}
            </Text>
            <Text>
                <b>Time:</b>{time}
            </Text>
            <Text>
                <b>Questions:</b>{questions}
            </Text>
            <div>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={customStyles}>

                <h1>{topic}</h1>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal>
        </Wrapper>
    )
}