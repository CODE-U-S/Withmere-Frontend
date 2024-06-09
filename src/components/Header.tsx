/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const headerStyle = css`
    background-color: #fff;
    color: black;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const logoStyle = css`
    width: 200px;
    margin-left: 20px;
`;

const iconsStyle = css`
    display: flex;
    gap: 1rem;
    margin-right: 20px;
`;

const iconStyle = css`
    width: 20px;
    height: 20px;
`;

const Header: React.FC = () => {
    return (
        <div css={headerStyle}>
            {/* 왼쪽 로고 이미지 */}
            <img src="/src/assets/header/Logo.svg" alt="로고" css={logoStyle} />

            {/* 오른쪽 아이콘 */}
            <div css={iconsStyle}>
                <img src="/src/assets/header/search_icon.svg" alt="검색 아이콘" css={iconStyle} />
                <img src="/src/assets/header/user_icon.svg" alt="유저 아이콘" css={iconStyle} />
                <img src="/src/assets/header/alarm_icon.svg" alt="알람 아이콘" css={iconStyle} />
            </div>
        </div>
    );
};

export default Header;
