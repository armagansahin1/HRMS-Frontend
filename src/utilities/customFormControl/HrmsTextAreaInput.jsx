import React from 'react'
import { useField} from 'formik';
import { Label,FormField,TextArea } from 'semantic-ui-react'

export default function HrmsTextAreaInput({placeHolder,style,...props}) {
    const [field, meta] = useField(props);
    return (
        <div>
            <FormField error={!!meta.error && meta.touched}>
                <TextArea {...field} {...meta} style={style} placeHolder={placeHolder}/>
                {meta.touched && !!meta.error ? (
         <Label pointing basic color="red" content={meta.error}></Label>
       ) : null}
            </FormField>
        </div>
    )
}
