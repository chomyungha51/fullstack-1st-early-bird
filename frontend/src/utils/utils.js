/**
 * 
 * @param {String} title 
 * @param {String} summary 
 * @param {String} category 
 * @returns {Boolean} 입력 폼 항목 중 하나라도 공백이 존재하지 않는지
 */
// export const enteredTodoFormIsNotEmpty = (title, summary, category) => {
export const enteredTodoFormIsNotEmpty = (userId, description) => {
    if (userId === 0 || description.trim().length === 0)
        return false;

    return true;
}