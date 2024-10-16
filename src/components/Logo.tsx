import React, { useState } from "react";
import styled from "styled-components";

interface LogoProps {
    src?: string;
    alt?: string;
    size?: string;
}

const LogoContainer = styled.div<{ size: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    overflow: hidden;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;

`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Logo: React.FC<LogoProps> = ({ src, alt = "Logo", size = "100px" }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <LogoContainer size={size}>
            {src && !imageError ? (
                <Image
                    src={src}
                    alt={alt}
                    onError={() => setImageError(true)}
                />
            ) : (
                <div />
            )}
        </LogoContainer>
    );
};

export default Logo;
