import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';
import login from './login';

    const xyz = ({ route,name }) => {
        return (
          <div>
            <div className="white f3">{`${name}, heyy...`}</div>
            <div className="white f3">{`${route}, heyy...`}</div>
          </div>
        );
      };

export default xyz;