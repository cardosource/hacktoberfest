import React from 'react'
import { Grid, Typography } from '@material-ui/core'


//Internal
import { UserProps, Participation } from '@services/user'
import Spacing from '@components/spacing'
import { makeStyles, Theme } from '@material-ui/core/styles'
import EmojiEventIcon from '@material-ui/icons/EmojiEvents'





const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: 'rgba(33, 22, 128, 0.04)',
        border: '2px solid #fff',
        borderRadius: 24,
        flexDirection: 'column',
        boxShadow: "0px 0px 4px #FFFFFF, 0px 4px 4px rgba(255, 255, 255, 0.25)",
        marginBottom: 30,
        [theme.breakpoints.up(theme.breakpoints.values.md)]: {
            maxWidth: '28vw',
        },
        [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
            maxWidth: '32%',
            margin: 0
        }
        
    },
    pictureContainer: {
        textAlign: "center",
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundImage: "url(\"https://s3.glbimg.com/v1/AUTH_8b507d480c314f97a3b4b28346d025f5/hacktoberfest/Topo.png\")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '18vh',
        [theme.breakpoints.up("md")]: {
            height: '16vh'
        },
    },

    trophy: {
        width: 100,
    },
    fontCall: {
        fontSize: "2.25rem",
        [theme.breakpoints.up("lg")]: {
            fontSize: "3.5rem",
        }
      },
      subFontCall: {
          fontSize: "1.125rem",
          [theme.breakpoints.up("lg")]: {
              fontSize: "1.5rem",
          }
      }
  }))


const EditionElement = (props: EditionProps) => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.pictureContainer}/>
            <Spacing smart={{margin: "24px"}}>
                <div>
                    <Grid container justifyContent="flex-start" alignItems="center">
                        <Grid item>
                            <Typography style={{fontWeight: 600}} component="p" variant="body1">
                                Edição {props.edition}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <EmojiEventIcon/>
                        </Grid>
                    </Grid>
                    <Typography component="p" variant="body2"><b>{props.participation?.opened || 0}</b> PRs Realizados </Typography>
                    <Typography component="p" variant="body2"><b>{props.participation?.merged || 0}</b> PRs Aprovados</Typography>
                </div>
            </Spacing>
        </div>
    )
}



const ParticipationHistory = (props:ParticipationHistoryProps) => {
    const { user  } =  props
    const classes = useStyles()
    const editions: Array<string> = Object.keys(user.hacktoberfest || {}) || []

    return (
        <>
        <Grid container>
        <Spacing smart={{margin: "0px 0px 16px 0px"}}>
            <Grid item xs={12}>
                <Typography className={classes.fontCall} component="h2" color="secondary" variant="h2">Histórico de Participação</Typography>
            </Grid>
        </Spacing>
        <Spacing smart={{margin: "0px 0px 34px 0px"}}>
            <Grid item xs={12}>
                <Typography component="h3" color="secondary" variant="h3">Relembre suas participações no Hacktoberfest.</Typography>
            </Grid>
        </Spacing>
        </Grid>
        <Spacing smart={{margin: "0px 0px 80px 0px"}} desktop={{margin: "0px 0px 160px 0px"}}>
            <Grid container justifyContent='space-between'>
                { editions.map((edition: string, index: number) => <Grid xs={12} md={4} item className={classes.root}> <EditionElement edition={edition}/> </Grid>)}
            </Grid>
        </Spacing>
        </>
    )
}


interface EditionProps {
    edition: string,
    participation?: Participation
}


interface ParticipationHistoryProps {
    user: UserProps
}


export default ParticipationHistory
