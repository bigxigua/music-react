// export const OPEN_USERINFO_PAGE_STATE = 'OPEN_USERINFO_PAGE_STATE';
// export const OPEN_MESSAGELIST_PAGE_STATE = 'OPEN_MESSAGELIST_PAGE_STATE';
// export const OPEN_CHATROOM_PAGE_STATE = 'OPEN_CHATROOM_PAGE_STATE';

export const setPageState = (count) => {
	return {
		type: OPEN_USERINFO_PAGE_STATE,
		count
	}
}

//删除一条聊天记录
export const deleteChatItem = (index) => {
	return {
		type: 'DELETE_ITEM',
		index
	}
}
