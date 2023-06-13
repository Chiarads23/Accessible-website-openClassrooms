import styles from "../styles/form.module.scss";

function Form() {
    return (
<form method="post" action="get">
    <fieldset>
        <legend>Your contact information</legend> 
        <label for="last name">What is your last name?</label>
        <input type="text" name="last name" id="last name" />
        <label for="first name">What is your first name?</label>
        <input type="text" name="first name" id="first name" />
        <label for="email">What is your email?</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Join newsletter</button>
    </fieldset>
    <fieldset>
        <legend>Your wish</legend> 
        <p>
            Make a wish that you would like to see come true:</p>
           <label for="rich"> <input type="radio" name="wish" value="rich" id="rich" /> To be rich</label>
          <label for="famous">  <input type="radio" name="wish" value="famous" id="famous" /> To be famous</label>
           <label for="intelligent"> <input type="radio" name="wish" value="intelligent" id="intelligent" /> To be <strong>even</strong> more intelligent</label>
           <label for="other"> <input type="radio" name="wish" value="other" id="other" /> Other...</label>
        
        <p className={styles.other}>
            <label for="precisions">If "Other", please explain:</label>
            <textarea name="precisions" id="precisions" cols="40" rows="4"></textarea>
        </p>
    </fieldset>
</form>
    )
}

export default Form;