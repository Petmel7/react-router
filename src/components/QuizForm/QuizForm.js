
import { Formik } from "formik";
import * as Yup from 'yup';
import { StyledForm, StyledField, StyledError } from './QuizForm.styled';

const SignupSchema = Yup.object().shape({
    topic: Yup.string()
        .min(1, 'Too Short!')
        .required('Required'),
    level: Yup.string()
        .oneOf(['beginner', 'intermediate', 'advanced'])
        .required('Required'),
    time: Yup.number()
        .positive('Must be >0')
        .min(10, 'Not enogh time!')
        .required('Required'),
    questions: Yup.number()
        .positive('Must be >0')
        .min(3, 'Min 3 q!')
        .required('Required'),
});

export const QuizForm = ({ onAdd }) => {
    return (
        <Formik
            initialValues={{
                topic: '',
                level: 'beginner',
                time: 0,
                questions: 0,
            }}
            
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
                console.log(values, actions)
                onAdd(values)
                actions.resetForm();
            }}
        >
            <StyledForm>
                <label>
                    Topic
                    <StyledField name='topic' placeholder='Quiz topic...' />
                    <StyledError name='topic' placeholder='div' />
                </label>

                <label>
                    Level
                    <StyledField as='select' name='level'>
                        <option value='beginner'>Beginner</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='advanced'>Advanced</option>
                    </StyledField>
                    <StyledError name='level' />
                </label>

                <label>
                    Time
                    <StyledField name="time" type="number" />
                </label>

                <label>
                    Questions
                    <StyledField name="questions" type="number" />
                </label>

                <button type="submit">Submit</button>

            </StyledForm>

        </Formik>
    );
};