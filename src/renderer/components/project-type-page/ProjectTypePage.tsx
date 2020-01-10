import {Button, Text} from 'evergreen-ui';
import React from 'react';
import {hot} from 'react-hot-loader/root';

import './project-type-page.scss';

import NodeJSIcon from '../assets/nodejs-icon.svg';

const ProjectTypePage: () => JSX.Element = () => (
    <div id='fss-page-type-page'>
        <div id='fss-page-type-title'>
            <h1 id='fss-page-type-title-text'>Select your project type</h1>
        </div>
        <p id='fss-page-type-content'>
            Please note that more project types would be supported in future versions.
            If you do not find the specific type you were looking for, you can always select the generic one.
        </p>
        <div id='fss-page-type-actions'>
            <Button id='fss-page-type-generic-button' className='fss-page-type-button' iconBefore='code' iconSize={200} height={60}>
                <Text className='fss-page-type-button-text' size={600}>Generic</Text>
            </Button>
            <Button id='fss-page-type-nodejs-button' className='fss-page-type-button' height={60}>
                <img src={NodeJSIcon} alt='Node.js'/>
                <Text className='fss-page-type-button-text' size={600}>Node.js</Text>
            </Button>
        </div>
    </div>
);

export default ProjectTypePage;
