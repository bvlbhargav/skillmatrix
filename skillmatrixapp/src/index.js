import React from 'react';
import ReactDOM from 'react-dom';

class SkillSet extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello Murali from react </h1>
                <AddSkills />
            </div>
        );

    }
}

class AddSkills extends React.Component {
    constructor() {
        super();
        this.state={
            value :null,
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        Skill:
    <input type="text" name="value" />
                    </label>
                    <input type="button" value="Add" onClick={() => alert('value')} />
                </form>
            </div>
        );
    }
}

class DisplaySkills extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: []
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

ReactDOM.render(

    <SkillSet />,
    document.getElementById('root')
);