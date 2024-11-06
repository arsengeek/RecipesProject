import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui/dist/swagger-ui.css';

const SwaggerUIComponent = () => {
    return (
        <div>
            <SwaggerUI
                url="http://localhost:8000/openapi/"  
                dom_id="swagger"
                docExpansion="none"
            />
        </div>
    );
};

export default SwaggerUIComponent;
