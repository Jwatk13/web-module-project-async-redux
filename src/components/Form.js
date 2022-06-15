import React from 'react';

class Form extends React.Component {

    onSubmit = evt => {
        evt.preventDefault()
    }

    render() {
        return (
            <>
                <form id="agifyForm" onSubmit={this.onSubmit}>
                    <input
                        placeholder='<--Enter a name here! '
                        name="name"
                        type="text"   
                    />
                    <button>Search</button>
                </form>
            </>
        )
    }
}

export default Form;
