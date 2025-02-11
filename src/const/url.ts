import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const GITHUB = pkg.homepage;
export const CHANGELOG = 'https://chieh.pro/2023/01/01/%E5%8F%8D%E9%A6%88/';
export const CHIEH = 'https://chieh.pro';
export const CHIEH_PLUGIN_GUIDE = 'https://chieh.pro/2023/01/01/%E5%8F%8D%E9%A6%88/';
export const ABOUT = pkg.homepage;
export const FEEDBACK = pkg.bugs.url;
export const DISCORD = 'https://discord.com/';

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const AGENTS_INDEX_GITHUB = 'https://chieh.pro/2023/01/01/%E5%8F%8D%E9%A6%88/';
export const AGENTS_INDEX_GITHUB_ISSUE = 'https://chieh.pro/2023/01/01/%E5%8F%8D%E9%A6%88/';

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  mobile ? `/chat/mobile?session=${id}` : `/chat?session=${id}`;
export const MANUAL_UPGRADE_URL = 'https://chieh.pro/2023/01/01/%E5%8F%8D%E9%A6%88/';
