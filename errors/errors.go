package errors

import "net/http"

type Error struct {
	Status  int
	Message string
}

func (e *Error) Code() int {
	return e.Status
}

func (e *Error) Error() string {
	return e.Message
}

func NewError(status int, message string) *Error {
	return &Error{
		status,
		message,
	}
}

var InternalError = NewError(http.StatusInternalServerError, "Server Internal Error")
