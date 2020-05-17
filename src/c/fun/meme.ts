import { Command, CommandArgument, CommandArgTypes} from "../../m/class";
import { Client, Message, GuildMember, MessageEmbed, MessageAttachment } from "discord.js";
import got from "got";

module.exports = class test extends Command
{

	constructor(  )
	{

		super
		(
			{
				Name : 'meme',
				Desc : 'Nabs a meme from dankmemes subreddit',
				Guild : false,
				Owner : false,
				Hidden : false,
			}
		)

	}

	public run = async (message : Message, client : Client, args?: {name : string, value : CommandArgTypes}[] ) => {

		let jsn = JSON.parse( (await got('https://www.reddit.com/r/dankmemes/random.json') ).body )[0].data.children[0].data
		console.log(jsn)
		let a = false
		let emb = new MessageEmbed()
		if (!jsn.is_video) emb.setImage(jsn.url)
		else emb.attachFiles(jsn.url)
		emb.setTitle(jsn.title)
		emb.setDescription('This meme was taken from *r/dankmemes*')
		emb.setURL('https://www.reddit.com'+jsn.permalink)
		message.channel.send(emb)
		return {Worked : true}
	}

}