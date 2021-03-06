package factory

import (
	"github.com/merico-dev/lake/models/domainlayer"
	"github.com/merico-dev/lake/models/domainlayer/user"
)

func CreateUser() (*user.User, error) {
	user := &user.User{
		DomainEntity: domainlayer.DomainEntity{
			Id: RandIntString(),
		},
		Name:      "",
		Email:     "",
		AvatarUrl: "",
		Timezone:  "",
	}
	return user, nil
}
