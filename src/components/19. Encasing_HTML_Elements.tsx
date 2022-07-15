import { NONAME } from "dns";

type TCustomInput = {
  fullwidth?: boolean,
  variant?: 'outlined' | 'contained';
} & React.ComponentProps<'input'>;

export default function CustomInput({fullwidth, variant, ...rest}: TCustomInput){
  const styles = {
    width: '',
    outline: '',
    border: ''
  }
  if(fullwidth){
    styles.width = '100%'
  }

  if(variant == 'outlined'){
    styles.outline = '1px solid grey'
  }else if(variant == 'contained'){
    styles.outline = 'none'
    styles.border = 'none'
  }
  // variant == 'outlined' ? styles.border = '1px solid black': variant == 'contained' ? styles.border = 'none' : null;

  return(
    <>
      <h1>Encasing HTML Elements</h1>
    <p>
      Encasing HTML elements is a process used by to add functionality to already
      existing HTML elements, by wrapping them in a component and extending their native
      functionality
    </p>
    <p>
      This process is carried out by specifying the parameter to be receives as props,
      and extending them by "React.ComponentProps{`<>`}" which attaches all the properties or
      attributes of any element specified as generic argument, to the custom properties
      we wish to add to the native functionality of the element.
    </p>
    <p>
      Let's see how this is done as shown in the example below.
    </p>
    <code>
      <pre>
        {
          `
          type TCustomInput = {
            fullwidth?: boolean,
            variant?: 'outlined' | 'contained';
          } & React.ComponentProps<'input'>;

          export default function CustomInput({fullwidth, variant, ...rest}: TCustomInput){
            const styles = {
              width: '',
              outline: '',
              border: ''
            }
            if(fullwidth){
              styles.width = '100%'
            }

            if(variant == 'outlined'){
              styles.outline = '1px solid grey'
            }else if(variant == 'contained'){
              styles.outline = 'none'
              styles.border = 'none'
            }
            // variant == 'outlined' ? styles.border = '1px solid black': variant == 'contained' ? styles.border = 'none' : null;

            return(
              <>
                <input 
                  style={styles}
                  {...rest}
                  type="text" />
              </>
            )
          }


          // in App.tsx

          <CustomInput fullwidth variant='outlined' />
          `
        }
      </pre>
    </code>

    <h3>Output:</h3>
    <input 
      style={styles}
      {...rest}
      type="text" />
    </>
  )
}