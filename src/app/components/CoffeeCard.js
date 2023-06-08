import {useCallback, useState} from "react"
import Image from "next/image"
import heartEmpty from "@/image/heart-light.svg"
import heartFull from "@/image/heart-sharp-solid.svg"
import heartBreak from "@/image/heart-crack-sharp-solid.svg"
import trash from "@/image/trash-xmark-sharp-light.svg"
import styled from "styled-components"

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 5px;
  height: 200px;
  width: 300px;
  padding: 20px;
  color: #000;
  box-shadow: inset 0 0 5px rgba(203, 205, 213, 0.2);
  background: linear-gradient(rgba(255, 255, 255, 0.8),
  rgba(255, 255, 255, 0.8)),
  url("/images/neon_coffee.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

// const IconsWrap = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   height: 30px;
//   width: 30px;
//   padding: 1px;
// `
const FaveIcon = styled(Image)`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  padding: 1px;

  &:hover {
    cursor: pointer;
  }
`
const TrashIcon = styled(Image)`
  height: 100%;
  width: 100%;
  opacity: .4;
  transition: all ease-out .3s;

  &:hover {
    translate(x): 70 px;
    opacity: 1;
    cursor: pointer;
  }
`
const CardItem = styled.p`
  text-transform: capitalize;

  &:nth-of-type(1) {
    font-size: 1.5em;
  }

  &:nth-of-type(2) {
    font-size: 1.8em;
  }
`

export default function CoffeeCard({coffee}) {
    const {
        brand: coffeeBrand,
        name: coffeeName,
        roast: coffeeRoast,
        type: coffeeType
    } = coffee
    const [isFavorite, setIsFavorite] = useState(false)
    const [hovering, setHovering] = useState(false)


    const favoriteIconHandler = useCallback(() => {
        setIsFavorite(!isFavorite)
        console.log(isFavorite)
        console.log('handler fired')
    }, [isFavorite])

    const handleMouseOver = () => {
        console.log('mouseOver fired')
        console.log(isFavorite)
        setHovering(true)
    }
    const handleMouseOut = () => {
        console.log('mouseLeave fired')
        setHovering(false)
    }


    return (
        <>
            <Card>
                {!isFavorite &&
                    <FaveIcon onClick={favoriteIconHandler} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                              src={heartEmpty} alt='Favorite icon'/>}
                {hovering &&
                    <FaveIcon onClick={favoriteIconHandler} onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                              src={heartFull} alt='Favorite icon'/>}

                {isFavorite &&
                    <FaveIcon onClick={favoriteIconHandler} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                              src={heartFull} alt='Favorite icon'/>}
                {hovering &&
                    <FaveIcon onClick={favoriteIconHandler} onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                              src={heartBreak} alt='Favorite icon'/>}

                {/*{(!isFavorite && !isUserCreated) && <IconsWrap>*/}
                {/*    <FaveIcon onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={heartEmpty} alt='Favorite icon'/>*/}
                {/*    {hovering &&*/}
                {/*        <>*/}
                {/*            <FaveIcon onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={heartFull} alt='Favorite icon'/>*/}
                {/*            <TrashIcon onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={trash} alt='Favorite icon'/>*/}
                {/*        </>}*/}
                {/*</IconsWrap>}*/}
                {/*{(isFavorite && isUserCreated) && <IconsWrap>*/}
                {/*    <FaveIcon onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={heartEmpty} alt='Favorite icon'/>*/}
                {/*    {hovering &&*/}
                {/*        <>*/}
                {/*            <FaveIcon onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={heartFull} alt='Favorite icon'/>*/}
                {/*            <TrashIcon onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={trash} alt='Favorite icon'/>*/}
                {/*        </>}*/}
                {/*</IconsWrap>}*/}
                <CardItem>{coffeeBrand}</CardItem>
                <CardItem>{coffeeName}</CardItem>
                <CardItem>{coffeeRoast}</CardItem>
                <CardItem>{coffeeType}</CardItem>
            </Card>
        </>
    )
}
