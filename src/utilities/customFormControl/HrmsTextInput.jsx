import React from 'react'
import { useField} from 'formik';
import { Label,FormField } from 'semantic-ui-react'

export default function HrmsTextInput({style,placeHolder,...props}) {

    const [field, meta] = useField(props);
    return (
        <div>
            <FormField error={meta.touched && !!meta.error} style={style}>
            <input {...field} {...meta} placeholder={placeHolder}/>
            {meta.touched && !!meta.error ? (
         <Label pointing basic color="red" content={meta.error}></Label>
       ) : null}
       </FormField>
        </div>
    )
}
