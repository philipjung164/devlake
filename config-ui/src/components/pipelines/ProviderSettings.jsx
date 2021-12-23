import React from 'react'
import {
  Providers,
} from '@/data/Providers'
import {
  Button,
  ButtonGroup,
  FormGroup,
  InputGroup,
  MenuItem,
  Intent
} from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

const ProviderSettings = (props) => {
  const {
    providerId,
    projectId,
    sourceId,
    selectedSource,
    sources = [],
    boardId,
    owner,
    repositoryName,
    setProjectId = () => {},
    setSourceId = () => {},
    setSelectedSource = () => {},
    setBoardId = () => {},
    setOwner = () => {},
    setRepositoryName = () => {},
    isEnabled = () => {},
    isRunning = false,
  } = props

  let providerSettings = null

  switch (providerId) {
    case Providers.JENKINS:
      providerSettings = <p><strong style={{ fontWeight: 900 }}>AUTO-CONFIGURED</strong><br />No Additional Settings</p>
      break
    case Providers.JIRA:
      providerSettings = (
        <>
          <FormGroup
            disabled={isRunning || !isEnabled(providerId)}
            label={<strong>Source ID<span className='requiredStar'>*</span></strong>}
            labelInfo={<span style={{ display: 'block' }}>Choose Connection Instance ID</span>}
            inline={false}
            labelFor='source-id'
            className=''
            contentClassName=''
            fill
          >
            {/* <InputGroup
              id='source-id'
              disabled={isRunning || !isEnabled(providerId)}
              placeholder='eg. 54'
              value={sourceId}
              onChange={(e) => setSourceId(e.target.value)}
              className='input-source-id'
              autoComplete='off'
              fill={false}
            /> */}
            <ButtonGroup>
              <Select
                disabled={isRunning || !isEnabled(providerId)}
                className='selector-source-id'
                multiple
                inline={true}
                fill={true}
                items={sources}
                activeItem={selectedSource}
                itemPredicate={(query, item) => item?.title?.toLowerCase().indexOf(query.toLowerCase()) >= 0}
                itemRenderer={(item, { handleClick, modifiers }) => (
                  <MenuItem
                    active={modifiers.active}
                    key={item.value}
                    label={item.value}
                    onClick={handleClick}
                    text={item.title}
                  />
                )}
                noResults={<MenuItem disabled={true} text='No Connections.' />}
                onItemSelect={(item) => {
                  setSelectedSource(item)
                }}
              >
                <Button
                  // intent={Intent.DANGER}
                  disabled={isRunning || !isEnabled(providerId)}
                  style={{ justifyContent: 'space-between', minWidth: '206px', maxWidth: '290px', whiteSpace: 'nowrap' }}
                  text={selectedSource ? `${selectedSource.title} [${selectedSource.value}]` : 'Select Instance'}
                  rightIcon='double-caret-vertical'
                  fill
                />
              </Select>
              <Button
                icon='eraser'
                intent={Intent.WARNING}
                disabled={isRunning || !isEnabled(providerId)}
                onClick={() => setSelectedSource(null)}
              />
            </ButtonGroup>
          </FormGroup>
          <FormGroup
            disabled={isRunning || !isEnabled(providerId)}
            label={<strong>Board ID<span className='requiredStar'>*</span></strong>}
            labelInfo={<span style={{ display: 'block' }}>Enter JIRA Board No.</span>}
            inline={false}
            labelFor='board-id'
            className=''
            contentClassName=''
            style={{ marginLeft: '12px' }}
            fill
          >
            <InputGroup
              id='board-id'
              disabled={isRunning || !isEnabled(providerId)}
              placeholder='eg. 8'
              value={boardId}
              onChange={(e) => setBoardId(e.target.value)}
              className='input-board-id'
              autoComplete='off'
              fill={false}
            />
          </FormGroup>
        </>
      )
      break
    case Providers.GITHUB:
      providerSettings = (
        <>
          <FormGroup
            disabled={isRunning || !isEnabled(providerId)}
            label={<strong>Owner<span className='requiredStar'>*</span></strong>}
            labelInfo={<span style={{ display: 'block' }}>Enter Project Owner</span>}
            inline={false}
            labelFor='owner'
            className=''
            contentClassName=''
            fill
          >
            <InputGroup
              id='owner'
              disabled={isRunning || !isEnabled(providerId)}
              placeholder='eg. merico-dev'
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className='input-owner'
              autoComplete='off'
            />
          </FormGroup>
          <FormGroup
            disabled={isRunning || !isEnabled(providerId)}
            label={<strong>Repository Name<span className='requiredStar'>*</span></strong>}
            labelInfo={<span style={{ display: 'block' }}>Enter Git repository</span>}
            inline={false}
            labelFor='repository-name'
            className=''
            contentClassName=''
            style={{ marginLeft: '12px' }}
            fill
          >
            <InputGroup
              id='repository-name'
              disabled={isRunning || !isEnabled(providerId)}
              placeholder='eg. lake'
              value={repositoryName}
              onChange={(e) => setRepositoryName(e.target.value)}
              className='input-repository-name'
              autoComplete='off'
              fill={false}
            />
          </FormGroup>
        </>
      )
      break
    case Providers.GITLAB:
      providerSettings = (
        <>
          <FormGroup
            disabled={isRunning || !isEnabled(providerId)}
            label={<strong>Project ID<span className='requiredStar'>*</span></strong>}
            labelInfo={<span style={{ display: 'block' }}>Enter the GitLab Project ID No.</span>}
            inline={false}
            labelFor='project-id'
            className=''
            contentClassName=''
          >
            <InputGroup
              id='project-id'
              disabled={isRunning || !isEnabled(providerId)}
              placeholder='eg. 937810831'
              value={projectId}
              onChange={(e) => setProjectId(pId => e.target.value)}
              className='input-project-id'
              autoComplete='off'
            />
          </FormGroup>
        </>
      )
      break
    default:
      break
  }

  return providerSettings
}

export default ProviderSettings
