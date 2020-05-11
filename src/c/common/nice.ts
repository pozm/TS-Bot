import { Command, CommandArgument, CommandArgTypes} from "../../m/class";
import { Client, Message, GuildMember, Guild, Collection, MessageEmbed } from "discord.js";

module.exports = class test extends Command 
{

    constructor(  ) 
    {

        super
        ( 
            { 
                Name : 'getinvite',
                Desc : 'Gets an invitation to a guild (server)',
                Guild : false,
                Owner : false,
                Hidden : false,
                Args : 
                    [new CommandArgument({
                        Name : 'guild',
                        Needed : false,
                        Type : "str" as keyof CommandArgTypes,
                        Perms : null,
                        Position : 'all'
                    }),
                    new CommandArgument({
                        Name : 'o',
                        Needed : false,
                        Type : "str" as keyof CommandArgTypes,
                        Perms : null,
                        Position : [0],
                        prefix : '-',
                        same:true
                    }),
                ]
            }
        )

    }

    public run = async (message : Message, client : Client, args?: {name : string, value : CommandArgTypes}[] ) => {
        
        let emb = new MessageEmbed
        emb.setThumbnail(client.user!.displayAvatarURL())
        emb.setTitle('wow totally not self promo')
        emb.addField('github', '[click](https://github.com/pozm/TS-Bot)')
        emb.setFooter('made by pozm. :)')
        message.channel.send(emb)
        return {Worked : true}
    }

}