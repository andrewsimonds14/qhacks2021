import React from 'react';
import { withTheme } from 'styled-components';
import {
	FooterWrap,
	FooterSubText,
	FooterText,
	FooterTextList,
	IconList,
	IconWrapper,
} from './Footer.styles';
import { Facebook, Twitter, Snapchat, Twitch } from '../../assets';

const dummyFunction = () => {
	console.log('Hi');
};

const Footer = (props) => (
	<FooterWrap>
		{props.landing && (
			<FooterTextList>
				<FooterText>Muscle benefit</FooterText>
				<FooterText>Minimal commit</FooterText>
				<FooterText>That's QuickFit</FooterText>
			</FooterTextList>
		)}
		<FooterSubText>See what QuickFit is up to</FooterSubText>
		<IconList>
			<IconWrapper>
				<Facebook fill={props.theme.colors.grey1} />
			</IconWrapper>
			<IconWrapper>
				<Twitter fill={props.theme.colors.grey1} />
			</IconWrapper>
			<IconWrapper>
				<Snapchat fill={props.theme.colors.grey1} />
			</IconWrapper>
			<IconWrapper>
				<Twitch fill={props.theme.colors.grey1} />
			</IconWrapper>
		</IconList>
		<FooterSubText small>
			Contact: andrew.simonds@queensu.ca | michael.kurdyla@queensu.ca |
			16mdt@queensu.ca
		</FooterSubText>
	</FooterWrap>
);
export default withTheme(Footer);
