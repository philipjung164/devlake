package factory

import (
	"github.com/merico-dev/lake/models/domainlayer"
	"github.com/merico-dev/lake/models/domainlayer/ticket"
)

func CreateSprint(boardId string) (*ticket.Sprint, error) {
	sprint := &ticket.Sprint{
		DomainEntity: domainlayer.DomainEntity{
			Id: RandIntString(),
		},
		BoardId:      boardId, // ref to board
		Url:          "",
		State:        "",
		Name:         "",
		StartDate:    nil,
		EndDate:      nil,
		CompleteDate: nil,
	}
	return sprint, nil
}
