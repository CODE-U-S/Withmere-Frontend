/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle = css`
    width: 250px;
    transition: width 0.3s;
    background-color: #f4f4f4;
    position: relative;
`;

const collapsedSidebarStyle = css`
    width: 80px;
`;

const toggleButtonStyle = css`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 20px;
    z-index: 1;
    transition: all 0.3s;
`;

const collapsedToggleButtonStyle = css`
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
`;

const sidebarHeaderStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 60px 10px 20px;
    position: relative;
`;

const profileImageStyle = css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: width 0.3s, height 0.3s;
`;

const collapsedProfileImageStyle = css`
    width: 30px;
    height: 30px;
`;

const loginButtonStyle = css`
    margin-top: 20px;
    position: absolute;
    right: 30px;
    top: 55px;
`;

const navStyle = css`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const navItemStyle = css`
    display: flex;
    align-items: center;
    padding: 10px;
`;

const navLinkStyle = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    width: 100%;
    transition: justify-content 0.3s;
`;

const navIconStyle = css`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    transition: margin-right 0.3s;
`;

const navTextStyle = css`
    display: inline-block;
    transition: opacity 0.3s, width 0.3s;
`;


const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside css={[sidebarStyle, isCollapsed && collapsedSidebarStyle]}>
            <button css={[toggleButtonStyle, isCollapsed && collapsedToggleButtonStyle]} onClick={toggleSidebar}>
                <img src={`/src/assets/sidebar/${isCollapsed ? 'arrow_right' : 'arrow_left'}.svg`} alt="Toggle Sidebar" />
            </button>
            <div css={sidebarHeaderStyle}>
                <img src="/src/assets/sidebar/default_profile.svg" alt="Profile" css={[profileImageStyle, isCollapsed && collapsedProfileImageStyle]} />
                {!isCollapsed && (
                    <button css={loginButtonStyle}>로그인</button>
                )}
            </div>
            <nav css={navStyle}>
                <ul>
                    <li css={navItemStyle}>
                        <Link to="/post" css={navLinkStyle}>
                            <img src="/src/assets/sidebar/write_icon.svg" alt="글쓰기 아이콘" css={navIconStyle}/>
                            <span css={navTextStyle} className="nav-text">글쓰기</span>
                        </Link>
                    </li>
                    <li css={navItemStyle}>
                        <Link to="/" css={navLinkStyle}>
                            <img src="/src/assets/sidebar/team_icon.svg" alt="팀 프로젝트 아이콘" css={navIconStyle}/>
                            <span css={navTextStyle} className="nav-text">팀프로젝트</span>
                        </Link>
                    </li>
                    <li css={navItemStyle}>
                        <Link to="/" css={navLinkStyle}>
                            <img src="/src/assets/sidebar/designer_icon.svg" alt="디자이너 아이콘" className="nav-icon"/>
                            <span css={navTextStyle} className="nav-text">디자이너</span>
                        </Link>
                    </li>
                    <li css={navItemStyle}>
                        <Link to="/" css={navLinkStyle}>
                            <img src="/src/assets/sidebar/developer_icon.svg" alt="개발자 아이콘" className="nav-icon"/>
                            <span css={navTextStyle} className="nav-text">개발자</span>
                        </Link>
                    </li>
                    <li css={navItemStyle}>
                        <Link to="/" css={navLinkStyle}>
                            <img src="/src/assets/sidebar/study_icon.svg" alt="스터디 아이콘" className="nav-icon"/>
                            <span css={navTextStyle} className="nav-text">스터디</span>
                        </Link>
                    </li>
                    <li css={navItemStyle}>
                        <Link to="/" css={navLinkStyle}>
                            <img src="/src/assets/sidebar/heart_icon.svg" alt="찜한 게시물 아이콘" className="nav-icon"/>
                            <span css={navTextStyle} className="nav-text">찜한 게시물</span>
                        </Link>
                    </li>
                    <li css={navItemStyle}>
                        <Link to="/" css={navLinkStyle}>
                            <img src="/src/assets/sidebar/RecentlyViewed_icon.svg" alt="최근 본 게시물 아이콘"
                                 className="nav-icon"/>
                            <span css={navTextStyle} className="nav-text">최근 본 게시물</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
