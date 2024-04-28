import React, { useState } from 'react'
import { data } from "../../helper/data"
import { Col, Container, Form, Row } from 'react-bootstrap'
import PlayerCard from './PlayerCard';


const CardContainer = () => {
    const [search, setSearch] = useState("");
    return (

        <>
            <Form.Control
                placeholder="Search Player..."
                className="w-50 m-auto"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
            />

            <Container className="rounded-4 my-4 p-3 card-container">
                <Row className="g-3 justify-content-center">
                    {data
                        .filter((player) =>
                            player.name.toLowerCase().includes(search.trim().toLowerCase())
                        )
                        .map((player, index) => {
                            return (
                                <Col key={index} md={6} lg={4} xl={3}>
                                    <PlayerCard {...player} />
                                </Col>
                            );
                        })}
                    {/* {filteredData.map((player, index) => {
              return (
                <Col key={index} md={6} lg={4} xl={3}>
                  <PlayerCard {...player} />
                </Col>
              );
              })} */}
                </Row>
            </Container>

        </>
    )
}

export default CardContainer