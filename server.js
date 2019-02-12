const Discord = require('discord.js');
const VERSION = '0.0.1';
const TOKEN = '';
const CHANNEL = 'log';

var bot = new Discord.Client();

bot.on('ready', function() {
    console.log('[META][INFO] Connected to Discord API Service');
});

bot.on('disconnected', function() {
    console.log('[META][WARN] Disconnected from Discord API Service. Attempting to reconnected...');
});

bot.on('warn', function(msg) {
    console.log('[META][WARN] ' + msg);
});

bot.on('error', function(err) {
    console.log('[META][ERROR] ' + err.message);
    process.exit(1);
});


bot.on('messageDelete', function(message) {

    if(message.channel.type == 'text') {
        var log = message.guild.channels.find('name', CHANNEL);
        if (log != null)
			var embed = new Discord.RichEmbed()
        .setTitle(`Mesaj silindi.`)
        .setColor("#36393E")
        .setDescription(`<#${msg.channel.id}> kanalında ` + message.author + ` tarafından gönderilen bir mesaj silindi. \nSilinen Mesaj: ` + message.cleanContent)
        .setFooter(`Silinen Mesaj ID: ${msg.id} | Mesajı Silen Kullanıcı ID: ${msg.author.id}`)
            log.sendMessage(embed);

    }

});

bot.on('messageUpdate', function(oldMessage, newMessage) {

    if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {

        var log = newMessage.guild.channels.find('name', CHANNEL);
        if (log != null)
			
			const embed = new RichEmbed()
          .setColor("#36393E")
          .setTitle('Mesaj Düzenlendi.')
          .setDescription(`<@${oldMessage.author.id}> adlı kullanıcı <#${oldMessage.channel.id}> kanalına gönderdiği mesajı düzenledi.`)
          .addField(`Eski Mesaj`, `${oldMessage.cleanContent}`)
          .addField(`Yeni Mesaj`, `${newMessage.cleanContent}`)
		  
            log.sendMessage(embed);
    }

});

bot.on('guildBanAdd', function(guild, member) {


    var log = guild.channels.find('name', CHANNEL);
    if (log != null)
		        var embed = new Discord.RichEmbed()
        .setTitle('Üye yasaklandı.')
        .setColor("#36393E")
        .setDescription(`<@${member.user.id}> adlı kullanıcı yasaklandı!`)
        .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
        .setFooter(`Yasaklanan Kullanıcı ID: ${member.user.id}`)
        .setTimestamp();
        log.sendMessage(embed);

});

bot.on('channelDelete', async channel => {

        if (channel.type === "text") {
			        var log = guild.channels.find('name', CHANNEL);
        if (log != null)
          let embed = new Discord.RichEmbed()
          .setColor("#36393E")
          .setTitle(`Kanal Silindi.`)
          .setDescription(`<@${msg.author.id}> tarafından <#${channel.id}> kanalı silindi. _(metin kanalı)_`)
          .setFooter(`Silinen Kanal ID: ${channel.id} | Silen Kullanıcı ID: ${msg.author.id}`)
        log.sendMessage(embed);
        };
        if (channel.type === "voice") {
        var log = guild.channels.find('name', CHANNEL);
        if (log != null)
		 let embed = new Discord.RichEmbed()
          .setColor("#36393E")
          .setTitle(`Kanal Silindi.`)
          .setDescription(`<@${msg.author.id}> tarafından ${channel.name} kanalı silindi. _(sesli kanal)_`)
          .setFooter(`Silinen Kanal ID: ${channel.id} | Silen Kullanıcı ID: ${msg.author.id}`)
        log.sendMessage(embed);
        }
});
bot.on('channelCreate', async channel => {
        if (channel.type === "text") {
			        var log = guild.channels.find('name', CHANNEL);
        if (log != null)
          var embed = new Discord.RichEmbed()
          .setColor("#36393E")
          .setTitle(`Kanal oluşturuldu.`)
          .setDescription(`<@${msg.author.id}> tarafından <#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
          .setFooter(`Oluşturulan Kanal ID: ${channel.id} | Oluşturan Kullanıcı ID: ${msg.author.id}`)
        log.sendMessage(embed);
        };
        if (channel.type === "voice") {
        var log = guild.channels.find('name', CHANNEL);
        if (log != null)
          var embed = new Discord.RichEmbed()
          .setColor("#36393E")
          .setTitle(`Kanal Oluşturuldu.`)
          .setDescription(`<@${msg.author.id}> tarafından ${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
          .setFooter(`Oluşturulan Kanal ID: ${channel.id} | Oluşturan Kullanıcı ID: ${msg.author.id}`)
        log.sendMessage(embed);
        }
      }
});
	
bot.on('guildBanRemove', function(guild, member) {


    var log = guild.channels.find('name', CHANNEL);
    if (log != null)
			        var embed = new Discord.RichEmbed()
        .setTitle('Üyenin yasaklaması kaldırıldı.')
        .setColor("#36393E")
        .setDescription(`<@${member.user.id}> adlı kullanıcının yasaklanması kaldırıldı!`)
        .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
        .setFooter(`Yasaklanması Kaldırılan Kullanıcı ID: ${member.user.id}`)
        .setTimestamp();
        log.sendMessage(embed);

});

bot.on('guildMemberAdd', function(guild, member) {


    var log = guild.channels.find('name', CHANNEL);
    if (log != null) 
		        var embed = new Discord.RichEmbed()
        .setTitle('Üyenin yasaklaması kaldırıldı.')
        .setColor("#36393E")
        .setDescription(`<@${member.user.id}> adlı kullanıcının yasaklanması kaldırıldı!`)
        .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
        .setFooter(`Yasaklanması Kaldırılan Kullanıcı ID: ${member.user.id}`)
        .setTimestamp();
        log.sendMessage(embed);
    

});

bot.on('guildMemberRemove', function(guild, member) {


    var log = guild.channels.find('name', CHANNEL);
    if (log != null)
		        var embed = new Discord.RichEmbed()
        .setColor("#36393E")
        .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
        .setTitle('Sunucudan ayrıldı;')
        .setDescription(`<@${member.user.id}> Adlı kullanıcı Sunucu'dan ayrıldı!`)
        .setFooter(`Ayrılan Kullanıcı ID: ${member.user.id}`)
        .setTimestamp()
        log.sendMessage(embed);

});

bot.on('guildMemberUpdate', function(guild, oldMember, newMember) {

    var Changes = {
        unknown: 0,
        addedRole: 1,
        removedRole: 2,
        username: 3,
        nickname: 4,
        avatar: 5
    };
    var change = Changes.unknown;

    var removedRole = '';
    oldMember.roles.every(function(value) {
        if(newMember.roles.find('id', value.id) == null) {
            change = Changes.removedRole;
            removedRole = value.name;
        }
    });

    var addedRole = '';
    newMember.roles.every(function(value) {
        if(oldMember.roles.find('id', value.id) == null) {
            change = Changes.addedRole;
            addedRole = value.name;
        }
    });

    if(newMember.user.username != oldMember.user.username)
        change = Changes.username;

    if(newMember.nickname != oldMember.nickname)
        change = Changes.nickname;

    if(newMember.user.avatarURL != oldMember.user.avatarURL)
        change = Changes.avatar;


        switch(change) {
            case Changes.unknown:
			let embed = new Discord.RichEmbed()
				.setColor("#36393E")
				.setTitle(`Kullanıcı Güncellendi`)
				.setDescription(newMember + ` güncellendi.`)
				.setFooter(`Kullanıcı ID: ${newMember.user.id}`)
                log.sendMessage(embed);
                break;
            case Changes.addedRole:
			let embed = new Discord.RichEmbed()
				.setColor("#36393E")
				.setTitle(`Kullanıcı Güncellendi`)
				.setDescription(newMember + 'adlı kişiye ' + addedRole + "rolü verildi.")
				.setFooter(`Kullanıcı ID: ${newMember.user.id}`)
                log.sendMessage(embed);
                break;
            case Changes.removedRole:
			let embed = new Discord.RichEmbed()
				.setColor("#36393E")
				.setTitle(`Kullanıcı Güncellendi`)
				.setDescription(newMember + 'adlı kişiden ' + removedRole + "rolü alındı.")
				.setFooter(`Kullanıcı ID: ${newMember.user.id}`)
                log.sendMessage(embed);
                break;
            case Changes.username:
			let embed = new Discord.RichEmbed()
				.setColor("#36393E")
				.setTitle(`Kullanıcı Güncellendi`)
				.setDescription(newMember + 'adlı kişi ' + oldMember.user.username + '#' + oldMember.user.discriminator + "olan adını" + newMember.user.username + '#' + newMember.user.discriminator + "olarak değiştirdi.")
				.setFooter(`Kullanıcı ID: ${newMember.user.id}`)
                log.sendMessage(embed);
                break;
            case Changes.nickname:
                log.sendMessage('**[TAKMA İSMİ DEĞİŞTİRİLDİ]** ' + newMember + ': ' +
                    (oldMember.nickname != null ? 'Changed nickname from ' + oldMember.nickname +
                        + newMember.nickname : 'Set nickname') + ' to ' +
                    (newMember.nickname != null ? newMember.nickname + '.' : 'original username.'));
                break;
            case Changes.avatar:
			let embed = new Discord.RichEmbed()
				.setColor("#36393E")
				.setTitle(`Kullanıcı Güncellendi`)
				.setDescription(newMember + "adlı kişi fotoğrafını değiştirdi.")
				.setFooter(`Kullanıcı ID: ${newMember.user.id}`)
                log.sendMessage(embed);
                break;
        }
    }

});

console.log('Logger v' + VERSION);

bot.login(TOKEN); 

function formatConsoleMessage(message) {
    return message.cleanContent.replace(new RegExp('\n', 'g'), '\n\t');
}