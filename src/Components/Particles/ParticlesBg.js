import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesConfig from './particles-config';

const ParticlesBg = () => {
    return (
        <Particles params={ParticlesConfig}></Particles>
    );
};

export default ParticlesBg;