import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobAdvertisementService from "../../services/jobAdvertisementService"
import { getJobAdvertisements } from '../../store/actions/jobAdveritesementActions'
import { Table, Grid, Segment, Header, Menu, Pagination, Dropdown } from 'semantic-ui-react'
import LocationFilter from './LocationFilter'
import WorkTypeFilter from './WorkTypeFilter'
import { PaginationTool } from '../../utilities/PaginationTool'

export default function OpenToWorkList() {

  const jobAdvertisementService = new JobAdvertisementService()
  const dispatch = useDispatch()

  const workType = useSelector(state => state.workType)
  const location = useSelector(state => state.location)

  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)




  const pageSizeOptions = [
    { value: 10, text: 10 },
    { value: 20, text: 20 },
    { value: 50, text: 50 },
    { value: 100, text: 100 },
  ]

  useEffect(() => {
    jobAdvertisementService.getByAdvertismentStatusTrueOrderByRelaseDateDesc().then(result => {
      dispatch(getJobAdvertisements(result.data.data))

    })
  }, [])

  const locationFilter = (j) => {
    if (location === "Hepsi") {
      return j.city?.cityName
    }

    else {
      return j.city?.cityName === location
    }
  }

  const workTypeFilter = (j) => {
    if (workType === "Hepsi") {
      return j.workType?.workType
    }

    else {
      return j.workType?.workType === workType
    }
  }

  const FilterData = () => {
    const data = useSelector(state => state.jobAdvertisements).filter(j => locationFilter(j) && workTypeFilter(j))
    return data
  }

  const {numberOfPages, paginatedData } = PaginationTool(FilterData(), currentPage, pageSize)



  return (
    <div>
      <Header block as="h2" textAlign="center">Açık Pozisyonlar</Header>
      <Grid columns={2}>

        <Grid.Row >
          <Grid.Column width="3">
            <Segment vertical><Dropdown placeholder='Sayfa Boyutunu Belirle' onChange={(event, data) => setPageSize(data.value)} selection options={pageSizeOptions} /></Segment>
            <Segment vertical><LocationFilter /></Segment>
            <Segment vertical><WorkTypeFilter /></Segment>
          </Grid.Column>

          <Grid.Column width="13">

            <Table celled>
              <Table.Header>

                <Table.Row>
                  <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                  <Table.HeaderCell>Aranan Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Şehir</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                  <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>

                {
                  paginatedData.map(data => (
                    <Table.Row key={data.id}>
                      <Table.Cell>{data.employer?.companyName}</Table.Cell>
                      <Table.Cell>{data.positionName}</Table.Cell>
                      <Table.Cell>{data.city?.cityName}</Table.Cell>
                      <Table.Cell>{data.workType?.workType}</Table.Cell>
                      <Table.Cell>{data.workTime?.workTime}</Table.Cell>
                      <Table.Cell>{data.numberOfOpenToWork}</Table.Cell>
                    </Table.Row>
                  ))
                }
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='6'>
                    <Menu floated='right' pagination>
                      <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={numberOfPages}
                        onPageChange = {(event,data) => setCurrentPage(data.activePage)}
                      />
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>

            </Table>

          </Grid.Column>

        </Grid.Row>
      </Grid>


          

    </div>
  )
}
