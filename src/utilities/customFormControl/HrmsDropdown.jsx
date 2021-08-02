import React from 'react'
import { useField} from 'formik';
import { Label,FormField } from 'semantic-ui-react'

export default function HrmsDropdown({placeHolder,style,options,...props}) {
    const [field, meta] = useField(props);
    return (
        <div>
        <FormField error={meta.touched && !!meta.error} style = {style}>
          <select className="ui selection dropdown" {...meta} {...field}>
          <option value="" disabled selected>{placeHolder}</option>
          {options.map(o=>(
            <option value={o.value}>{o.text}</option>
          ))}
          </select>
          {meta.touched && !!meta.error ? (
         <Label pointing basic color="red" content={meta.error}></Label>
       ) : null}
       </FormField>
        </div>
    )
}
