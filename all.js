<p id="hitokoto">:D 获取中...</p>
<script>
    fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
        .then(data => {
            const hitokoto = document.getElementById('hitokoto')
            hitokoto.innerText = data.hitokoto
        })
        .catch(console.error)
</script>
<script size="90" alpha="0.5" zIndex="0" src="https://cdn.jsdelivr.net/gh/sstlotr/sst2021@0.0.2/dongtai.js" type="text/javascript" charset="utf-8"></script>
<script src='//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js'></script>
<div id="vcomments"></div>
<script>
    new Valine({
        el: '#vcomments',
        appId: '0HhSr8I1PFSAIc8Cl278Apt5-gzGzoHsz',
        appKey: 'YUNGmeYwniv8hs0f03FsHkTd'
    })
</script>
